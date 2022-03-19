newFunction();

function newFunction(): void {
  {
    "Id"; "ace218ea2ce4874792679a41bf4ba789af3ecd9d177acc6c860271247a4a7d55";
    "Created"; "2022-03-19T05:14:07.924003231Z";
    "Path"; "/bin/sh";
    "Args";[
      "-c",
      "echo Container started\ntrap \"exit 0\" 15\n\nexec \"$@\"\nwhile sleep 1 & wait $!; do :; done",
      "-",
    ];
    "State"; {
      "Status"; "running";
      "Running"; true;
      "Paused"; false;
      "Restarting"; false;
      "OOMKilled"; false;
      "Dead"; false;
      "Pid"; 17293;
      "ExitCode"; 0;
      "Error"; "";
      "StartedAt"; "2022-03-19T05:14:08.338539563Z";
      "FinishedAt"; "0001-01-01T00:00:00Z";
    }
    "Image"; "sha256:3da5bdacdb51f38d91d8b449393e1023e194b657917d017a03c8f97348ffb145";
    "ResolvConfPath"; "/var/lib/docker/containers/ace218ea2ce4874792679a41bf4ba789af3ecd9d177acc6c860271247a4a7d55/resolv.conf";
    "HostnamePath"; "/var/lib/docker/containers/ace218ea2ce4874792679a41bf4ba789af3ecd9d177acc6c860271247a4a7d55/hostname";
    "HostsPath"; "/var/lib/docker/containers/ace218ea2ce4874792679a41bf4ba789af3ecd9d177acc6c860271247a4a7d55/hosts";
    "LogPath"; "/var/lib/docker/containers/ace218ea2ce4874792679a41bf4ba789af3ecd9d177acc6c860271247a4a7d55/ace218ea2ce4874792679a41bf4ba789af3ecd9d177acc6c860271247a4a7d55-json.log";
    "Name"; "/adoring_visvesvaraya";
    "RestartCount"; 0;
    "Driver"; "overlay2";
    "Platform"; "linux";
    "MountLabel"; "";
    "ProcessLabel"; "";
    "AppArmorProfile"; "";
    "ExecIDs";[
      "8f052f04e1ea4f81f338e8de77ca90ae45ddb35c1ae84032c431cdfcde5e029b",
      "7cdd69b7755b5fb0e9522486899fac42f1adc05a3e10a809203cef16828d06e6",
      "7cfb4200d6eb77f1a61d67440d347aa147462e3dbf4b96caa7e1e20b28d7754b",
    ];
    "HostConfig"; {
      "Binds"; null;
      "ContainerIDFile"; "";
      "LogConfig"; {
        "Type"; "json-file";
        "Config"; { }
      }
      "NetworkMode"; "default";
      "PortBindings"; { }
      "RestartPolicy"; {
        "Name"; "no";
        "MaximumRetryCount"; 0;
      }
      "AutoRemove"; false;
      "VolumeDriver"; "";
      "VolumesFrom"; null;
      "CapAdd"; null;
      "CapDrop"; null;
      "CgroupnsMode"; "private";
      "Dns";[];
      "DnsOptions";[];
      "DnsSearch";[];
      "ExtraHosts"; null;
      "GroupAdd"; null;
      "IpcMode"; "private";
      "Cgroup"; "";
      "Links"; null;
      "OomScoreAdj"; 0;
      "PidMode"; "";
      "Privileged"; false;
      "PublishAllPorts"; false;
      "ReadonlyRootfs"; false;
      "SecurityOpt"; null;
      "UTSMode"; "";
      "UsernsMode"; "";
      "ShmSize"; 67108864;
      "Runtime"; "runc";
      "ConsoleSize";[
        0,
        0,
      ];
      "Isolation"; "";
      "CpuShares";
      "Memory"; 0;
      "NanoCpus"; 0;
      "CgroupParent"; "";
      "BlkioWeight"; 0;
      "BlkioWeightDevice";[];
      "BlkioDeviceReadBps"; null;
      "BlkioDeviceWriteBps"; null;
      "BlkioDeviceReadIOps"; null;
      "BlkioDeviceWriteIOps"; null;
      "CpuPeriod"; 0;
      "CpuQuota"; 0;
      "CpuRealtimePeriod"; 0;
      "CpuRealtimeRuntime"; 0;
      "CpusetCpus"; "";
      "CpusetMems"; "";
      "Devices";[];
      "DeviceCgroupRules"; null;
      "DeviceRequests"; null;
      "KernelMemory"; 0;
      "KernelMemoryTCP"; 0;
      "MemoryReservation"; 0;
      "MemorySwap"; 0;
      "MemorySwappiness"; null;
      "OomKillDisable"; null;
      "PidsLimit"; null;
      "Ulimits"; null;
      "CpuCount"; 0;
      "CpuPercent"; 0;
      "IOMaximumIOps"; 0;
      "IOMaximumBandwidth"; 0;
      "Mounts";
      {
        "Type"; "volume";
        "Source"; "CurrencyWallet-master-2ef0aa22a19df74bc3265e4c8567163d";
        "Target"; "/workspaces";
      }

      "Type"; "volume";
      "Source"; "vscode";
      "Target"; "/vscode";
    }
    "MaskedPaths";
    "/proc/asound";
    "/proc/acpi";
    "/proc/kcore";
    "/proc/keys";
    "/proc/timer_list";
    "/proc/timer_stats";
    "/proc/sched_debug";
    "/proc/scsi";
    "/sys/firmware";

    "ReadonlyPaths";
    "/proc/bus";
    "/proc/fs";
    "/proc/irq";
    "/proc/sys";
    "/proc/sysrq-trigger";

  }
  "GraphDriver";
  "Data";
  "LowerDir"; "/var/lib/docker/overlay2/e84ed43d243a818edf2a66c2dae332d192f78b8fbede4fc002b96616bd786373-init/diff:/var/lib/docker/overlay2/rrbfo9gdko0xuqy26wf8mnckm/diff:/var/lib/docker/overlay2/pwwg09qmfsilgdigzv3irt4up/diff:/var/lib/docker/overlay2/ln0gvik6ktqeytyxogi2e5scn/diff:/var/lib/docker/overlay2/w72orc04s6glnb61ns94i1bqa/diff:/var/lib/docker/overlay2/vu88xfl3tt8zab80q74lujj4i/diff:/var/lib/docker/overlay2/5a2ced76eacd6edfb9bb5c75e147e66233edae7382aa65574d8635b37a427dd2/diff:/var/lib/docker/overlay2/1e55e865bed956a9d229cb89e4532461d1bfa95195ee074d3b07d4aa46276031/diff:/var/lib/docker/overlay2/7e65a88a945c5d366b487a7035658004cea4df2d3437ddb7aed3d5369d82bf90/diff:/var/lib/docker/overlay2/1ea0c25388c2cc7f8a618ec2c0b31b0e3d2ab6ab0c918b29cee048e770d53ea7/diff:/var/lib/docker/overlay2/5866c40e892e81c3e24642ceaf71f904621dfc14ae6aa70e979ca5044263fef9/diff:/var/lib/docker/overlay2/a675a26af9731b83e83e0a0637da82b77535e70ebf56e5076263a387786fd1e3/diff:/var/lib/docker/overlay2/71e06ce9a99fc5fc3037ed448c2841f9d0f14d7b852d65c52f7542ade00ce79d/diff:/var/lib/docker/overlay2/3c2b88ae71d2dd23700910b2f2c2e691981291c6cb538c7d29bd5400afb2debf/diff:/var/lib/docker/overlay2/6fd2c37347231f43e26bd2196ba99deefc02113a8896131b6e21e549b0c33910/diff";
  "MergedDir"; "/var/lib/docker/overlay2/e84ed43d243a818edf2a66c2dae332d192f78b8fbede4fc002b96616bd786373/merged";
  "UpperDir"; "/var/lib/docker/overlay2/e84ed43d243a818edf2a66c2dae332d192f78b8fbede4fc002b96616bd786373/diff";
  "WorkDir"; "/var/lib/docker/overlay2/e84ed43d243a818edf2a66c2dae332d192f78b8fbede4fc002b96616bd786373/work";

  "Name"; "overlay2";

  "Mounts";
  {
    "Type"; "volume";
    "Name"; "CurrencyWallet-master-2ef0aa22a19df74bc3265e4c8567163d";
    "Source"; "/var/lib/docker/volumes/CurrencyWallet-master-2ef0aa22a19df74bc3265e4c8567163d/_data";
    "Destination"; "/workspaces";
    "Driver"; "local";
    "Mode"; "z";
    "RW"; true;
    "Propagation";
    {
      "Type"; "volume";
      "Name"; "vscode";
      "Source"; "/var/lib/docker/volumes/vscode/_data";
      "Destination"; "/vscode";
      "Driver"; "local";
      "Mode"; "z";
      "RW"; true;
      "Propagation";
    }
    "Config";
    "Hostname"; "ace218ea2ce4";
    "Domainname"; "";
    "User"; "";
    "AttachStdin"; false;
    "AttachStdout"; true;
    "AttachStderr"; true;
    "ExposedPorts";
    "81/tcp"; { }
  }
  "Tty"; false;
  "OpenStdin"; false;
  "StdinOnce"; false;
  "Env";[
    "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
    "NODE_VERSION=14.19.1",
    "YARN_VERSION=1.22.17",
  ];
  "Cmd";
  "-c";
  "echo Container started\ntrap \"exit 0\" 15\n\nexec \"$@\"\nwhile sleep 1 & wait $!; do :; done";
  "-";
  "Image"; "vsc-currencywallet-2ef0aa22a19df74bc3265e4c8567163d";
  "Volumes"; null;
  "WorkingDir"; "/root/CurrencyWallet";
  "Entrypoint";
  "/bin/sh";

  "OnBuild"; null;
  "Labels"; {
    "vsch.local.repository"; "https://github.com/Iceymann18777/CurrencyWallet.git/tree/master";
    "vsch.local.repository.folder"; "CurrencyWallet";
    "vsch.local.repository.volume"; "CurrencyWallet-master-2ef0aa22a19df74bc3265e4c8567163d";
    "vsch.quality"; "stable";
    "vsch.remote.devPort"; "0";
  }
  "NetworkSettings";
  "Bridge"; "";
  "SandboxID"; "4eca863ff19fe48043d9ecde37b7ee8fd1e728b82c814854a68655bc260df538";
  "HairpinMode"; false;
  "LinkLocalIPv6Address"; "";
  "LinkLocalIPv6PrefixLen"; 0;
  "Ports"; {
    "81/tcp"; null;
  }
  "SandboxKey"; "/var/run/docker/netns/4eca863ff19f";
  "SecondaryIPAddresses"; null;
  "SecondaryIPv6Addresses"; null;
  "EndpointID"; "c7bf9b9bbd6353560fa3bd0b21931aa8ef1ed34e0509b4906e504cc0ad480f01";
  "Gateway"; "172.17.0.1";
  "GlobalIPv6Address"; "";
  "GlobalIPv6PrefixLen"; 0;
  "IPAddress"; "172.17.0.3";
  "IPPrefixLen"; 16;
  "IPv6Gateway"; "";
  "MacAddress"; "02:42:ac:11:00:03";
  "Networks"; {
    "bridge"; {
      "IPAMConfig"; null;
      "Links"; null;
      "Aliases"; null;
      "NetworkID"; "1d6835c4d5bdf08012fc56476a8e6e176bc1156a0f2e4c20c0429d3ee5d64917";
      "EndpointID"; "c7bf9b9bbd6353560fa3bd0b21931aa8ef1ed34e0509b4906e504cc0ad480f01";
      "Gateway"; "172.17.0.1";
      "IPAddress"; "172.17.0.3";
      "IPPrefixLen"; 16;
      "IPv6Gateway"; "";
      "GlobalIPv6Address"; "";
      "GlobalIPv6PrefixLen"; 0;
      "MacAddress"; "02:42:ac:11:00:03";
      "DriverOpts"; null;
    }
  }
  "Ports";
}
